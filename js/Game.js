class Game{
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false
    }


    //=== GET/SET =========

    /**
     * @return {object} the player object whose active property is equal to true
     */
    get activePlayer(){
        return this.players.find(player => player.active)
    }


    //=== METHODS =========
    
    /**
     * Create 2 players
     * @return {array} an array with 2 player object
     */
    createPlayers(){
        const players = [
            new Player("Player 1", 1, "#e15258", true,),
            new Player("Player 2", 2, "#e59a13")
        ];

        return players;
    }

    /**
     * Start the game
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */
    handeKeydown(e){
        if(this.ready){
            if(e.key === "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft();
            } else if(e.key === "ArrowRight"){
                this.activePlayer.activeToken.moveRight(this.board.cols);
            } else if(e.key === "ArrowDown"){
                //drop the token in the board
                this.playToken();
            }
        }
    }

    /**
     * Finds Space object to drop Token into, drops Token
     */
    playToken(){
        let activeToken = this.activePlayer.activeToken;
        let chosenCol = this.board.spaces[activeToken.columnLocation]
        let targetSpace = null;
        

        for(let space of chosenCol){
            if (space.token === null){
                targetSpace = space;
            }
        }

        if (targetSpace){
            const game = this;
            game.ready = false;

            activeToken.drop(targetSpace, function(){
                game.updateGameState(activeToken, targetSpace);
            });  
        }
    }

    /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */
    checkForWin(target){
        const board = this.board;
        const spaces = this.board.spaces;
        const owner = target.token.owner;
        let win = 0;
        let veWin = 0;
        let d1Win = 0;
        let d2Win = 0;
        console.log(spaces);

        //vertical check
        for(let y = target.y; y < board.cols; ++y){
            if(spaces[target.x,y].owner === owner){
                win += 1;
            } else{
                break;
            }
        }
        for(let y = target.y; y >= 0; --y){
            if(spaces[target.x,y].owner === owner){
                win += 1;
            } else{
                break
            }
        }
        if(win >= 3){
            return true;
        }else{
            win = 0;
        }

        //orizzontal check
        for(let x = target.x; x < board.rows; ++x){
            if(spaces[x,target.y].owner === owner){
                win += 1;
            } else{
                break;
            }
        }
        for(let x = target.x; x >= 0; --x){
            if(spaces[x,target.y].owner === owner){
                win += 1;
            } else{
                break
            }
        }
        if(win >= 3){
            return true;
        }else{
            win = 0;
        }

        //diagonal check
        for(let x = 0; x <4; ++x){
            try{
                if(spaces[target.x+x,target.y+x].owner === owner){
                    win += 1;
                } else{
                    x=4;
                }
            }catch(e){
                x = 4;
            }
        }
        
        for(let x = 0; x > 0; --x){
            try{
                if(spaces[target.x-x,target.y-x].owner === owner){
                    win += 1;
                } else{
                    x = 0;
                }
            }catch(e){
                x=0;
            }
        }
        if(win >= 3){
            return true;
        }else{
            win = 0;
        }

        //diagonal 2 check
        for(let x = 0; x <4; ++x){
            try{
                if(spaces[target.x+x,target.y-x].owner === owner){
                    win += 1;
                } else{
                    x=4;
                }
            }catch(e){
                x = 4;
            }
        }
        
        for(let x = 0; x > 0; --x){
            try{
                if(spaces[target.x-x,target.y+x].owner === owner){
                    win += 1;
                } else{
                    x = 0;
                }
            }catch(e){
                x=0;
            }
        }
        if(win >= 3){
            return true;
        }else{
            win = 0;
        }

        return false;
    }

    /** 
     * Switches active player. 
     */
    switchPlayer(){
        for(let player of this.players){
            player.active = player.active === true ? false : true;
            // if(player.active){
            //     player.active = false;
            // }else{
            //     player.active = true;
            // }
        }
    }

    /** 
     * Displays game over message.
     * @param {string} message - Game over message.      
     */
    gameOver(message){
        const gameOver = document.querySelector('#game-over');
        gameOver.syle.display = "block";
        gameOver.textContent = message;
    }

     /** 
     * Updates game state after token is dropped. 
     * @param   {Object}  token  -  The token that's being dropped.
     * @param   {Object}  target -  Targeted space for dropped token.
     */
    updateGameState(token, target){
        target.mark(token);

        if(!this.checkForWin(target)){
            
            this.switchPlayer();
            
            if(this.activePlayer.checkTokens()){
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
                console.log(this.activePlayer);
            }else{
                this.gameOver(`GameOver! no moves available`);
            }
        } else {
            this.gameOver(`${target.owner.name} WIN!!!`);
        }
    }
}