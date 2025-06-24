import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseContactComponent } from './browse-contact.component';

describe('BrowseContactComponent', () => {
  let component: BrowseContactComponent;
  let fixture: ComponentFixture<BrowseContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
