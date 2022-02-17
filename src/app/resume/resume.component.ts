import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle(
      'Interactive Resumé for Odell Garrison - Software Developer & Engineer'
    );
  }

  ngOnInit(): void {}

  toProfileSection() {
    document.getElementById('profile-section').scrollIntoView();
  }
  toExperienceSection() {
    document.getElementById('experience-section').scrollIntoView();
  }
  toAbilitiesSection() {
    document.getElementById("abilities-section").scrollIntoView();
  }
  toContactSection() {
    document.getElementById('contact-section').scrollIntoView();
  }
}
