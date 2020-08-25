<script lang="ts">
    import { darkMode } from '../store.js';
    
    function toggleDarkMode(): void {
      darkMode.set(!darkMode);
      // console.log(darkMode);
      window.document.body.classList.toggle('dark-mode')
    }
</script>
  
<style type="text/scss">
  @import '../styles/vars';
  $d: 1.25em;
  $p: .25em;
  $g: .1em;
  
  .toggle-container {
    margin-right: 1.5rem;
  }

  // https://codepen.io/thebabydino/pen/JqzxVO
  body {
    display: grid;
    place-content: center;
    margin: 0;
    height: 100vh;
    background: silver
  }
  
  #time {
    position: absolute;
    right: 100vw;
    display: none;
    
    + label {
      --i: 0;
      --j: calc(1 - var(--i));		
      display: grid;
      grid-gap: $p $g;
      overflow: hidden;
      padding: $p;
      height: $d;
      width: 3em;
      border-radius: .5*$d + $p;
      border: 0.1rem transparent solid;
      background: hsl(199, 98%, calc(var(--j)*48%));
      color: transparent;
      user-select: none;
      transition: .3s;
      cursor: pointer;
      &:hover {
        border: 0.1rem $primary-highlight solid;
      }
      
      &:before, &:after {
        width: $d; height: $d;
        transition: inherit;
        content: ''
      }
      
      &:before {
        transform-origin: 10%	0;
        transform: translate(calc(var(--i)*(100% + #{$g}))) 
        scale(calc(1 - var(--i)*.4));
        background: hsl(60, 100%, 50%);
        --poly: polygon(46.81444% 17.6565%, 50% 0%, 53.18556% 17.6565%, 55.2941% 17.93409%, 57.37998% 18.349%, 59.43425% 18.89944%, 69.13417% 3.80602%, 65.32039% 21.33756%, 67.16221% 22.40093%, 68.93053% 23.58248%, 70.61778% 24.87716%, 85.35534% 14.64466%, 75.12284% 29.38222%, 76.41752% 31.06947%, 77.59907% 32.83779%, 78.66244% 34.67961%, 96.19398% 30.86583%, 81.10056% 40.56575%, 81.651% 42.62002%, 82.06591% 44.7059%, 82.3435% 46.81444%, 100% 50%, 82.3435% 53.18556%, 82.06591% 55.2941%, 81.651% 57.37998%, 81.10056% 59.43425%, 96.19398% 69.13417%, 78.66244% 65.32039%, 77.59907% 67.16221%, 76.41752% 68.93053%, 75.12284% 70.61778%, 85.35534% 85.35534%, 70.61778% 75.12284%, 68.93053% 76.41752%, 67.16221% 77.59907%, 65.32039% 78.66244%, 69.13417% 96.19398%, 59.43425% 81.10056%, 57.37998% 81.651%, 55.2941% 82.06591%, 53.18556% 82.3435%, 50% 100%, 46.81444% 82.3435%, 44.7059% 82.06591%, 42.62002% 81.651%, 40.56575% 81.10056%, 30.86583% 96.19398%, 34.67961% 78.66244%, 32.83779% 77.59907%, 31.06947% 76.41752%, 29.38222% 75.12284%, 14.64466% 85.35534%, 24.87716% 70.61778%, 23.58248% 68.93053%, 22.40093% 67.16221%, 21.33756% 65.32039%, 3.80602% 69.13417%, 18.89944% 59.43425%, 18.349% 57.37998%, 17.93409% 55.2941%, 17.6565% 53.18556%, 0% 50%, 17.6565% 46.81444%, 17.93409% 44.7059%, 18.349% 42.62002%, 18.89944% 40.56575%, 3.80602% 30.86583%, 21.33756% 34.67961%, 22.40093% 32.83779%, 23.58248% 31.06947%, 24.87716% 29.38222%, 14.64466% 14.64466%, 29.38222% 24.87716%, 31.06947% 23.58248%, 32.83779% 22.40093%, 34.67961% 21.33756%, 30.86583% 3.80602%, 40.56575% 18.89944%, 42.62002% 18.349%, 44.7059% 17.93409%);
        clip-path: var(--poly);
      }
      
      &:after {
        grid-column: 2;
        border-radius: 50%;
        transform: translatey(calc(var(--i)*(-100% - #{$p})));
        background: 
        radial-gradient(circle at 19% 19%, 
        transparent 41%, #fff 43%)
      }
    }
    
    &:checked + label { --i: 1 }
  }
</style>

<div class='toggle-container'>
  <input type='checkbox' id='time' on:change={toggleDarkMode}/>
  <label for='time'>Night</label>
</div>
