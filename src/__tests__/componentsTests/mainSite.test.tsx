import { render, screen, cleanup, getByText } from "@testing-library/react";
import "intersection-observer";
import Header from "@/app/components/Header/Header";
import Features from "@/app/components/Features/Features";
import Support from "@/app/components/SupportSection/Support";

afterEach(() => {
  cleanup();
});

test("Does Header nav have links ?", () => {
  render(<Header />);
  const navLinks = screen.getAllByTestId("nav-link");
  navLinks.forEach((link) => {
    expect(link).toHaveAttribute("href");
  });
});

test("Does Features render corectly (expected 5 items)", () => {
  render(<Features />);
  const featureItems = screen.getAllByTestId("feature-item");
  let itemCount = 0;
  featureItems.forEach(() => itemCount++);
  expect(itemCount).toBe(5);
});

test("Does support section have proper tittle ?", () => {
  render(<Support />);
  const supportSection = screen.getByTestId("support");
  expect(supportSection).toHaveTextContent("Our support !");
});
