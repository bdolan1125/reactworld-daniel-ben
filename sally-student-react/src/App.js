import React from 'react';
import './App.css';


function Resume(){
  return (
  <div>
    <header>
      <h1>
        Sally Student
      </h1>
     <p>(123)456-789</p>

      <address>
        <a href="mailto:SallyStudent@example.com"> SallyStudent@example.com </a>
      </address>
      <img width="100" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Picture of Sally Student AKA Ilana from Broad City"/>
    </header>

   <main>
    <section>
      <h2>
        Summary
      </h2>
      <p>
        La di da di da di da di da di da di da di da di da di da di da di da di da di da di da di dadi da di da di da di da di da. Hire me.
      </p>
    </section>

    <section>
      <h2>
        Education
      </h2>
      <nav>
        <ul>
          <li>
            Broad City University:
            B.A. Performing Arts 2016
          </li>
          <li>
            Broad City University:
            Master's Performing Arts
          </li>
        </ul>
      </nav>
    </section>
    
    <section>
      <h2>
        Experience
      </h2>
        <h3>
          Broad City Inc, Actress
        </h3>
        <p>
        February 2016-Present
        </p>
        <nav>
        <ul>
          <li>
            Acted and stuff
          </li>
          <li>
            Made people laugh
          </li>
        </ul>
        </nav>
      <h3>
        McDoozles
      </h3>
      <p>
      Day I was born-February 2016
      </p>
      <nav>
        <ul>
          <li>
            Flippin Patties Baby
          </li>
          <li>
            Makin milkshakes
          </li>
        </ul>
      </nav>
    </section>
    <section>
      <h2>
        Conclusion
      </h2>
      <p>
        In conclusion, because I know how to flip patties, make milkshakes, and make people laugh, I will be perfect for this full stack software engineering position.
      </p>
    </section>
   </main>
  </div>
  ) 
};

export default Resume;
