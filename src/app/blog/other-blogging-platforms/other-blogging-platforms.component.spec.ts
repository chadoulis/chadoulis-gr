import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBloggingPlatformsComponent } from './other-blogging-platforms.component';

describe('OtherBloggingPlatformsComponent', () => {
  let component: OtherBloggingPlatformsComponent;
  let fixture: ComponentFixture<OtherBloggingPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBloggingPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBloggingPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
