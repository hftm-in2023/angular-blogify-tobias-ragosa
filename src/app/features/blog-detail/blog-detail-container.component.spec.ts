import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BlogDetailContainerComponent } from './blog-detail-container.component';
import { RouterTestingModule } from '@angular/router/testing';

const mockDetail = {
  id: 42,
  title: 'Container Test',
  content: 'Content ...',
  author: 'Tester',
  likes: 7,
  comments: [],
  headerImageUrl: '',
  createdAt: '2022-03-10T12:15:50',
  updatedAt: '2022-03-10T12:15:50',
} as const;

describe('BlogDetailContainerComponent (Smart)', () => {
  let fixture: ComponentFixture<BlogDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailContainerComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '42' }) },
            data: of({ blog: mockDetail }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailContainerComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should pass the resolved blog to the view via async', (done) => {
    const comp = fixture.componentInstance;
    comp.blog$.subscribe((val) => {
      expect(val?.id).toBe(42);
      expect(val?.title).toBe('Container Test');
      done();
    });
  });
});
