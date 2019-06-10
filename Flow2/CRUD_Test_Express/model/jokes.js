var _jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
   ];
   
   class Jokes {
    constructor(jokes){
      this.jokes = jokes;
    }
    getRandomJoke(){
      const index = Math.floor(Math.random()*this.jokes.length);
      return this.jokes[index];
    }
    getAllJokes(){
      return this.jokes
    }
    getJoke(index){
      return this.jokes[index];
    }
     addJoke(joke){
       this.jokes.push(joke)
      }
      setJoke(index,joke){
        this.jokes[index] = joke;
      }
      setJokes(arr){
      this.jokes = arr
      }
      deleteJoke(paramindex){
      var newJokes =  this.jokes.filter(function(value,index){
         return value[index] != value[paramindex]
       })
       console.log(newJokes);
       this.jokes = newJokes;
      }
   }


   
   module.exports = new Jokes(_jokes);
   
   