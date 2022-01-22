import "./Docs.css";

const Docs = () => (
  <div className="docs">
    <div>
      <h2>Advanced Pirate Abilities </h2>
      <p>
        You must first win a trick with that pirate rather than just capturing
        them. Also, it must be used immediately and does not carry over to the
        next round. Last but not least, you may not use a pirate ability in the
        final trick of a round.
      </p>
      <p>
        <span className="label">Rosie D’ Laney:</span> Choose any player,
        including yourself, to lead the next trick.
      </p>
      <p>
        <span className="label">Bendt the Bandit:</span> Add 2 cards to your
        hand from the deck and then discard 2 cards.
      </p>
      <p>
        <span className="label">Rascal of Roatan:</span> Bet 0, 10, or 20
        points. Earn the points if you bid correct, lose them if you fail!
      </p>
      <p>
        <span className="label">Juanita Jade:</span> Privately look through any
        cards not dealt that round to see which are not in play.
      </p>
      <p>
        <span className="label">Harry the Giant:</span> You may choose to change
        your bid by plus or minus 1, or to leave it the same.
      </p>
    </div>
    <div>
      <h2>Special Cards</h2>
      <p>
        <span className="label">Kraken:</span> When played, the trick is
        destroyed entirely as the Kraken consumes all. No one wins the trick and
        the cards are set aside. The next trick is led by the player to the left
        of whoever played the Kraken.
      </p>
      <p>
        <span className="label">White Whale:</span> The White Whale affects both
        the special suits and numbered suits, in unique ways. Special cards
        change to escape cards and flee in terror! Numbered cards (including
        trump) turn white with fear! This means that the highest numbered card
        wins the trick, regardless of the suit. If there is a tie, the first one
        played is the winner. If only special cards were played, then the trick
        is discarded (like the Kraken) and the person who played the White Whale
        is the next to lead.
      </p>
      <p>
        <span className="label">Loot cards:</span> When you play a loot card,
        you enter into an alliance with the player who captures it. If both of
        you bid correctly, you are each awarded 20 bonus points.
      </p>
    </div>
  </div>
);

export default Docs;
