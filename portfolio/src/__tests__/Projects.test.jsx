import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';
import { projects as allProjects } from '../data/portfolio';

// Fixture data, so these tests don't depend on what the real grid holds today.
const projects = [
  {
    title: 'Eval Harness',
    description: 'Regression tests for a RAG pipeline.',
    github: 'https://github.com/example/eval-harness',
    demo: 'https://eval.example.com',
    tags: ['Python', 'RAGAS'],
    icon: 'activity',
  },
  {
    title: 'Queue Worker',
    description: 'Idempotent background jobs.',
    github: 'https://github.com/example/queue-worker',
    demo: null,
    tags: ['Ruby on Rails', 'RabbitMQ'],
    icon: 'tool',
  },
  {
    title: 'Internal Tool',
    description: 'Code is internal.',
    github: '#',
    demo: null,
    tags: ['BigQuery'],
    icon: 'database',
  },
];

describe('Projects', () => {
  beforeEach(() => render(<Projects items={projects} />));

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: 'AI engineering work' })).toBeInTheDocument();
  });

  it('renders every project title and description', () => {
    projects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
      expect(screen.getByText(p.description)).toBeInTheDocument();
    });
  });

  it('renders a GitHub link only for projects that have a real one', () => {
    const githubLinks = screen.queryAllByLabelText('GitHub repository');
    expect(githubLinks.length).toBe(2);
    githubLinks.forEach(a => expect(a).not.toHaveAttribute('href', '#'));
  });

  it('renders a demo link only for projects that have one', () => {
    expect(screen.queryAllByLabelText('Live demo').length).toBe(1);
  });

  it('opens project links in a new tab', () => {
    [...screen.queryAllByLabelText('GitHub repository'), ...screen.queryAllByLabelText('Live demo')]
      .forEach(a => expect(a).toHaveAttribute('target', '_blank'));
  });

  it('renders all tags for each project', () => {
    projects.forEach(p => p.tags.forEach(tag => {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }));
  });

  it('renders one card per project', () => {
    expect(document.querySelectorAll('.proj-card').length).toBe(projects.length);
  });
});

describe('Projects with real data', () => {
  it('renders nothing when there are no non-featured projects', () => {
    const { container } = render(<Projects items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('never repeats featured projects', () => {
    render(<Projects />);
    allProjects.filter(p => p.featured).forEach(p => {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    });
  });

  it('never lists a project without public code or a live demo', () => {
    allProjects.forEach(p => {
      const hasCode = p.github && p.github !== '#';
      expect(hasCode || Boolean(p.demo)).toBe(true);
    });
  });
});
