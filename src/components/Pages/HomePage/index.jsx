import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { calculateAge } from '../../../util/util';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home | BossElijah</title>
    </Helmet>
    <div className="content">
      <img
        src="/img/picture.jpg"
        alt=""
        height="150px"
        width="150px"
        className="picture"
      />
      <p>
        I'm a {calculateAge('08.10.05')}-year-old front-end web developer who
        enjoys coding more than free time. Over the past few years I've spent a
        lot of time working with React and Drupal.
      </p>
      <p>
        I am originally from Copenhagen (Denmark), but currently living in
        Prague (Czechia).
      </p>
      <p>My hobbies are following:</p>
      <ul>
        <li>Soccer (football)</li>
        <li>Skiing</li>
        <li>Singing</li>
        <li>Playing instruments</li>
        <li>Hanging out with friends</li>
        <li>Spending time with family</li>
        <li>(Coding... 😀)</li>
      </ul>
      <p>
        I have two younger siblings called Micah and Josias. Micah is{' '}
        {calculateAge('05.01.08')} years old while Josias is{' '}
        {calculateAge('01.10.11')} years old. They are both still in school.
      </p>
      <p>
        My dad, Andreas, works as a painter in a small entrepreneur company,
        while my mom, Anna, is working as a cheese maker.
      </p>
      <h2>My compentences</h2>
      <p>Here is a list of languages that I am used to working with.</p>
      <ul>
        <li>HTML</li>
        <li>CSS / SCSS / SASS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>PHP</li>
        <li>Twig</li>
        <li>YAML</li>
        <li>JSON</li>
      </ul>
      <p>Here is a list of libraries that I am used to working with.</p>
      <ul>
        <li>Drupal (Twig, YAML, PHP)</li>
        <li>React (JS / TS, JSON)</li>
      </ul>
      <p>
        In case you are wondering why I don't make many projects, it is because
        I have work besides these{' '}
        <Link className="text-link" to="/projects">
          projects
        </Link>{' '}
        that I do for fun.
      </p>
      <br />
      <br />
      <br />
      <p style={{ textAlign: 'center' }}>More content should be coming soon!</p>
      <p style={{ fontSize: '8rem', textAlign: 'center' }}>😀</p>
    </div>
  </>
);

export default HomePage;
