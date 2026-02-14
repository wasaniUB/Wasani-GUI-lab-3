const display = document.querySelector('#count-display');

const CounterApp = {
     count: 0,
     increment: function() {
     // increment this.count, update the display span
     this.count++
     display.textContent = this.count
    },
     decrement: function() {
     // decrement this.count, update the display span
     this.count--
     display.textContent = this.count
    }
};
     // Attach increment to #inc-btn using .bind()
     const incbtn = document.getElementById('inc-btn')
     incbtn.addEventListener('click', CounterApp.increment.bind(CounterApp))

     // Attach decrement to #dec-btn using .bind()
     const decbtn = document.getElementById('dec-btn')
     decbtn.addEventListener('click', CounterApp.decrement.bind(CounterApp))