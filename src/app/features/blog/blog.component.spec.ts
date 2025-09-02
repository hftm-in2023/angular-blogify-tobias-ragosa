import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { signal } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  const mockBlogService = {
    blogEntries: signal([]),
    loading: signal(false),
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
});
