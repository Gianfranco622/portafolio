import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { Study } from '@core/interface';
import { IntersectionObserverService } from '@core/services';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements AfterViewInit {
  listStudies: Study[] = [
    {
      id: 'study-1',
      institution: 'Universidad Nacional del Callao',
      name: 'studies.name.1',
      duration: 'studies.duration.1',
      description: 'studies.description',
    },
    {
      id: 'study-2',
      institution: 'Udemy',
      name: 'Angular',
      duration: 'studies.duration.2',
    },
    {
      id: 'study-3',
      institution: 'HackerRank',
      name: 'Angular(Basic)',
      duration: 'studies.duration.3',
    },
    {
      id: 'study-4',
      institution: 'CertiProf',
      name: 'Scrum Foundation Profesional Certificate SFPC',
      duration: 'studies.duration.4',
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
      threshold: 0.06,
    };

    for (const study of this.listStudies) {
      const element = this.document.querySelector(`#${study.id}`);
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
