import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  // Holds the component and its DOM
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Initilaize 'fixture' to AppComponent
    fixture = TestBed.createComponent(AppComponent);

    // Get the component from the fixture
    component = fixture.componentInstance;

  });
  it('#Add should', () => {
    const result = component.Add(2, 2);

    // Result should be 4
    expect(result).toEqual(4);

    // Result should be a number
    expect(typeof result).toBe('number');
  });

  it('#indexString should convert string into array of characters', () => {
    const result = component.indexString('hello world');

    // Check result is an Array
    expect(Array.isArray(result)).toBeTruthy();

    // Check if result is array of characters and deliminates white space
    expect(result).toEqual(['h','e','l','l','o','w','o','r','l','d']);
  });
});
