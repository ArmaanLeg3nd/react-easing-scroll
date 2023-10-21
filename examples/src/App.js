import "./styles.css";
import useEasingScroll from "react-easing-scroll";

export default function App() {
  //Add this function after importing it
  useEasingScroll("easeOutBounce", 1500, "scrollerLink");

  return (
    <div className="App">
      <nav className="navbar">
        <button className="nav-button">
          <a href="#sec1" className="scrollerLink">
            One
          </a>
        </button>
        <button className="nav-button">
          <a href="#sec2" className="scrollerLink">
            Two
          </a>
        </button>
        <button className="nav-button">
          <a href="#sec3" className="scrollerLink">
            Three
          </a>
        </button>
      </nav>
      <div className="margindiv">
        <center>
          <h3 id="sec1">Section 1</h3>
        </center>
        His parents continued to question him. He didn't know what to say to
        them since they refused to believe the truth. He explained again and
        again, and they dismissed his explanation as a figment of his
        imagination. There was no way that grandpa, who had been dead for five
        years, could have told him where the treasure had been hidden. Of
        course, it didn't help that grandpa was roaring with laughter in the
        chair next to him as he tried to explain once again how he'd found it.
      </div>
      <div className="margindiv">
        Was it enough? That was the question he kept asking himself. Was being
        satisfied enough? He looked around him at everyone yearning to just be
        satisfied in their daily life and he had reached that goal. He knew that
        he was satisfied and he also knew it wasn't going to be enough.
      </div>
      <div className="margindiv">
        <center>
          <h3 id="sec2">Section 2</h3>
        </center>
        It had been a simple realization that had changed Debra's life
        perspective. It was really so simple that she was embarrassed that she
        had lived the previous five years with the way she measured her worth.
        Now that she saw what she had been doing, she could see how sad it was.
        That made her all the more relieved she had made the change. The number
        of hearts her Instagram posts received wasn't any longer the indication
        of her own self-worth.
      </div>
      <div className="margindiv">
        The box sat on the desk next to the computer. It had arrived earlier in
        the day and business had interrupted her opening it earlier. She didn't
        who had sent it and briefly wondered who it might have been. As she
        began to unwrap it, she had no idea that opening it would completely
        change her life.
      </div>
      <div className="margindiv">
        <center>
          <h3 id="sec3">Section 3</h3>
        </center>
        I recollect that my first exploit in squirrel-shooting was in a grove of
        tall walnut-trees that shades one side of the valley. I had wandered
        into it at noontime, when all nature is peculiarly quiet, and was
        startled by the roar of my own gun, as it broke the Sabbath stillness
        around and was prolonged and reverberated by the angry echoes.
      </div>
      <div className="margindiv">
        I've rented a car in Las Vegas and have reserved a hotel in Twentynine
        Palms which is just north of Joshua Tree. We'll drive from Las Vegas
        through Mojave National Preserve and possibly do a short hike on our way
        down. Then spend all day on Monday at Joshua Tree. We can decide the
        next morning if we want to do more in Joshua Tree or Mojave before we
        head back.
      </div>
      <div className="margindiv">
        The house was located at the top of the hill at the end of a winding
        road. It wasn't obvious that the house was there, but everyone in town
        knew that it existed. They were just all too afraid to ever go and see
        it in person.
      </div>
    </div>
  );
}
