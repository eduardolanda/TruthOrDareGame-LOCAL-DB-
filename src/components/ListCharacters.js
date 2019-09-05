import React, { Component } from "react";

export default class ListCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truths: [
        "Do you like someone in this game?",
        "Would you rather drinking a shot of tequila or kissing someone here?",
        "Have you ever cheated on someone?",
        "Have you ever feel attraction with your partner's friend?",
        "Who would you kiss right now?",
        "Have you ever tried drugs?",
        "Have you had a crush in teacher?",
        "Have you had adventure with someone way more older than you?",
        "Have you kissed someone on this table?",
        "Have you kissed more than one person in this table?",
        "Have you stalked your ex when you where dating someone else?",
        "Have you consider breaking up with your partner to get back with your ex?",
        "Are you using tinder",
        "Are you using tinder right now?",
        "Have you had a Tinder date?",
        "Do you still talking to your ex?",
        "Would you dated someone on this table?",
        "Have you ever taken a selfie in the shower?",
        "Have you sent nudes?",
        "Have you kissed a girl?",
        "Have you kissed a boy?",
        "Have you date someone underage when you were overage?",
        "Have you watched porn with someone?",
        "Have you watched porn?",
        "Have you passed out because of drinking alcohol?",
        "Have you flirted with your friend's gf/bf?",
        "Have you thought you were pregnant or you were gonna be a dad?",
        "Have you tried tequila and soda?",
        "Have you twerked? ",
        "Have you cried while watching a moviee?",
        "Have you cried in a public place?",
        "Have you breaked up with your bf/gf because you wanted to date someone else?",
        "Have you taken the initiative to talk to someone you like?",
        "Have you been dumped because of someone else?",
        "Have you had a family crush?",
        "Have you tried weed?",
        "Have you tried cocaine?",
        "Have you dated someone from a differeny country?",
        "Have you broken a bone?",
        "Have you vomited after drinking?",
        "Have you blocked people on social media?"
      ],
      dares: [
        "Kiss someone you like in the table",
        "Do 5 push-ups now.",
        "You cant talk during 5 minutes or you drink the whole beer",
        "Drink a shot",
        "Dance for 10 seconds",
        "Twerk during 5 seconds",
        "Ask someone in the table for a date",
        "Tell someone you like what your feelings are",
        "Hug someone in the table for 10 seconds",
        "Take a embarrasing photo and upload it",
        "Hold hands with the person on the left during one round",
        "Kiss the person at the front in the neck",
        "Show the colour of your underwear",
        "Drink a whole glass of beer",
        "Do an striptease to someone",
        "Tell people on instagram that you are looking for a bf/gf",
        "Tell I love you to the last person you were chatting",
        "Ask someone's number out of the table"
      ],
      displaying: "Click a button."
    };
    this.displayDare = this.displayDare.bind(this);
  }

  displayDare(e) {
    const val = e.target.value;
    const newState = this.state[val][
      Math.floor(Math.random() * this.state[val].length)
    ];
    this.setState({ displaying: newState });
  }

  render() {
    return (
      <div>
        <div className="Buttons">
          <button
            className="gameButton"
            value="dares"
            onClick={this.displayDare}
          >
            Dare
          </button>
          <button
            className="gameButton"
            value="truths"
            onClick={this.displayDare}
          >
            Truth
          </button>
          <div className="Response">
            <h1>{this.state.displaying}</h1>
          </div>
        </div>
      </div>
    );
  }
}
