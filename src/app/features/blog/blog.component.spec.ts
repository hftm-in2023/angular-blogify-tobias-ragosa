import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { signal } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogService } from '../../core/services/blog.service';
import { type BlogPreviewEntry } from '../../core/models';

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>;
  let component: BlogComponent;

  const mockBlogs: BlogPreviewEntry[] = [
    {
      id: 1,
      title: 'Test Blog',
      contentPreview: 'Teaser…',
      author: 'Tester',
      likes: 3,
      comments: 0,
      headerImageUrl: '',
    },
  ];

  const mockBlogService = {
    blogEntries: signal<BlogPreviewEntry[]>(mockBlogs),
    loading: signal<boolean>(false),
    loadBlogs: jasmine.createSpy('loadBlogs'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent, RouterTestingModule],
      providers: [{ provide: BlogService, useValue: mockBlogService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose blogs and isLoading via getters', () => {
    expect(component.blogs.length).toBe(1);
    expect(component.blogs[0].title).toBe('Test Blog');
    expect(component.isLoading).toBeFalse();
  });

  it('should render blog title in template (if present in view)', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent || '').toContain('Test Blog');
  });
});
