import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import {
  AboutComponent,
  CanDoComponent,
  ContactComponent,
  ExperienceComponent,
  FooterComponent,
  StudiesComponent,
} from './components';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent {
  @ViewChild('component', { read: ViewContainerRef })
  component: ViewContainerRef;

  isScrolling: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {}

  // OWASP WEB TOP 10
  // Avoid XSS vulnerabilities
  setBackground() {
    const bodyElement = this.document.getElementsByTagName('body')[0];
    this.renderer2.addClass( bodyElement, 'azul')
  }

  handleScroll() {
    if (!this.isScrolling) {
      this.setBackground();
      this.loadAllComponents();
    }
    this.isScrolling = true;
  }

  private loadAllComponents() {
      this.loadCanDo();
      this.loadAbout();
      this.loadExperience();
      this.loadStudies();
      this.loadContact();
      this.loadFooter();
    }

  private loadCanDo() {
    this.component.createComponent(CanDoComponent);
  }

  private loadAbout(): void {
    this.component.createComponent(AboutComponent);
  }

  private loadExperience(): void {
    this.component.createComponent(ExperienceComponent);
  }

  private loadStudies(): void {
    this.component.createComponent(StudiesComponent);
  }

  private loadContact(): void {
    this.component.createComponent(ContactComponent);
  }

  private loadFooter(): void {
    this.component.createComponent(FooterComponent);
  }
}
