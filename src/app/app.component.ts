import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    post = [
        {
            title: "Green Tree",
            imageUrl: './assets/tree.jpg',
            username: 'nature',
            content: 'I saw this beautiful tree today'
        },
        {
            title: "Sleek Bike",
            imageUrl: './assets/bike.jpg',
            username: 'rider',
            content: 'I got to ride this sleek bike today'
        },
        {
            title: "Mountain Biking",
            imageUrl: './assets/mountain.jpg',
            username: 'adventure',
            content: 'Mountain Biking is a thrilling experience!'
        },
    ]
}
