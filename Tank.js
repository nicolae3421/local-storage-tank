class Tank{
    constructor(color){
        // ??? restore()
        this.color     = color;
        this.direction = "up";
        if(this.color == "green"){
            var y = 0; 
        }else if(this.color == "blue"){
            var y = -84;            
        }
        this.keyframes = [
            [-84*1, y],
            [-84*2, y],
            [-84*3, y],
            [-84*4, y],
            [-84*5, y],
            [-84*6, y],
            [-84*7, y],
            [ 0, y-84],
        ]
    }

    render(){
        this.dom            = document.createElement('div');
        this.dom.className  = "tank";        
        this.dom.style.left = 0;
        this.dom.style.top  = 0;
        game_map.appendChild(this.dom);
        this.animate();
    }

    animate(){
        this.dom.style.backgroundPosition = `${this.keyframes[0][0]}px ${this.keyframes[0][1]}px`;
        this.keyframes.unshift( this.keyframes.pop() )
    }

    turnRight(){
        this.direction = "right";
        this.dom.style.transform = "rotate(90deg)"
    }
    turnLeft(){
        this.direction = "left";
        this.dom.style.transform = "rotate(-90deg)" 
    }
    turnUp(){
        this.direction = "up";
        this.dom.style.transform = "rotate(0deg)" 
    }
    turnDown(){
        this.direction = "down";
        this.dom.style.transform = "rotate(180deg)" 
    }

    moveRight() {
        if(this.direction != "right"){
            this.turnRight();
            return;
        }
        let left = parseInt( this.dom.style.left );
            left += 10
        this.dom.style.left = `${left}px`
        this.animate();
    }
    moveLeft() {
        if (this.direction != "left") {
            this.turnLeft();
            return;
        }
        let left = parseInt(this.dom.style.left);
            left -= 10
        this.dom.style.left = `${left}px`
        this.animate();
    }
    moveUp() {
        if (this.direction != "up") {
            this.turnUp();
            return;
        }
        let top = parseInt(this.dom.style.top);
            top -= 10
        this.dom.style.top = `${top}px`
        this.animate();
    }
    moveDown() {
        if (this.direction != "down") {
            this.turnDown();
            return;
        }
        let top = parseInt(this.dom.style.top);
            top += 10
        this.dom.style.top = `${top}px`
        this.animate();
    }


    /////////////////////////////////////////////////////
    save(){
        // aici trebuie salvate coordonatele, directia, culoarea tankului
        // localStrage.setItem()
        // 'player_tank_top' ->
        // 'player_tank_left' ->
        // 'player_tank_direction' ->
        // 'player_tank_color' ->
    }

    restore(){
        // aici trebuie restaurate coordonatele, directia, culoarea tankului
        //localStorage.getItem()
        
        
        
        //localStorage.clear()
    }

}