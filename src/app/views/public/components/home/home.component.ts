import { DOCUMENT } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Inject,
  OnInit,
} from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  faWhatsApp = faWhatsapp;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('asTitle') asTitle: ElementRef;
  @Output()
  isLoad = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.videoplayer.nativeElement.play();
    }, 2500);
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  goToSection(section: string): void {
    this.isLoad.emit();
    const element = this.document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  initEffect(): void {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'rgb(241 245 249)',
    });

    writer
      .changeCursorColor('rgb(241 245 249)')
      .type('Gianfranco Alfaro')
      .rest(2000)
      .clear()
      .type('Software Engineer')
      .rest(2000)
      .clear()
      .type('Developer')
      .rest(2000)
      .start();
  }
}
