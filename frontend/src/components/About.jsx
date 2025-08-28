import "../styles/About.css";

/**
 * A simple about component with no input props
 * @returns (HTML) A Single HTML DIV that contains the about info.
 */

export default function About() {
  return (
    <div className="about-section">
      Grunt Mart is the one stop shop that provides all essential combat
      equipment that is required for operational readiness. With years of
      experience and knowledge of current and former Special Operations
      Soldiers, Grunt Mart provides equipment that will be necessary to complete
      the mission. <br />
      <br />
      Our products are battle-tested by today's leading law enforcement and
      military experts. We actively listen to their insights, treating their
      feedback as an essential part of our design process. Proudly made in the
      USA, our gear is engineered with a purpose—every detail is intentional.
      The clean, stylish silhouette isn't just for looks; it's a natural outcome
      of our minimalist, function-first approach. We've come a long way from our
      modest origins to now supplying the gear that our modern heroes depend on.
    </div>
  );
}
