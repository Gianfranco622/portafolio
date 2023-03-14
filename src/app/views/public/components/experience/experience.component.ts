import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { Experience } from '@core/interface';
import { IntersectionObserverService } from '@core/services';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {

  listExperience: Experience[] = [
    {
      id: 'experience-1',
      company: 'Universidad Nacional del Callao',
      period: 'experiences.period',
      jobTitle: 'experiences.jobtitle',
      activities: [
        'experiences.activity.1',
        'experiences.activity.2',
        'experiences.activity.3',
        'experiences.activity.4',
      ],
    }
  ];

  constructor(
    private intersectionObserverService: IntersectionObserverService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    for (const experience of this.listExperience) {
      const element = this.document.querySelector(`#${experience.id}`);
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.remove('visibility-hidden');
              element.classList.add('slideInUp');
              element.classList.add('animated');
            }, 100);
          }
        });
      };

      this.intersectionObserverService.create({
        callback,
        element,
        options,
      });
    }
  }
}
