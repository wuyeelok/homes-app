import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Serach</button>
      </form>
    </section>
    <section class="results"></section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
