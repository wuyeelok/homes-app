import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="brad-name">
      <img
        class="bradn-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
  </main>`,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
