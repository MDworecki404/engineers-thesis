<script lang="ts">

    import gsap from 'gsap';


    export default {
        data(){
            return {
                parkInfo: ''
            }
        },
        methods: {
            parkInfoFunc(){
                gsap.to('.title', {y: -150, duration: 0.5})
                gsap.fromTo('.info', {opacity: 0, duration: 0.5,}, {opacity: 1, duration: 0.5, delay: 0.5,})
                this.parkInfo = 'Park krajobrazowy utworzony w 1994 (pow. 7953 ha) położony w województwie dolnośląskim, w powiecie wołowskim, na północny zachód od Wołowa, na pograniczu Niziny Śląskiej oraz Wału Trzebnickiego w dorzeczu Jezierzycy, do której na obszarze parku wpływa mały prawobrzeżny dopływ Juszka.'
            },
            projectInfoFunc(){
                gsap.to('.title', {y: -150, duration: 0.5})
                gsap.fromTo('.info', {opacity: 0, duration: 0.5}, {opacity: 1, duration: 0.5, delay: 0.5})
                this.parkInfo = 'Projekt jest wynikiem pracy inżynierskiej i powstał w celach edukacyjnych.'

            },
            rulesInfoFunc(){
                gsap.to('.title', {y: -150, duration: 0.5})
                gsap.fromTo('.info', {opacity: 0, duration: 0.5}, {opacity: 1, duration: 0.5, delay: 0.5})
                this.parkInfo = `
                    Nic tu jeszcze nie ma
                `
            }
            
        }
    }
    

</script>

<template lang="pug"> 
.main
    .main_panel
        .main_panel--title 
            .title Park Krajobrazowy: Dolina Jezierzycy
            .info {{ parkInfo }} 
        .main_panel--nav
            ul
                li(@click="parkInfoFunc") O parku
                li(@click="projectInfoFunc") O projekcie
                li(@click="rulesInfoFunc") Regulamin parku 
            div
                router-link(to='/map')
                    button Przejdź do mapy
</template>

<style scoped lang="scss">

    $background: rgba(79, 178, 219, 0.8235);

    .main{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-image: url('../assets/landingpagebackground.jpg');
        background-size: cover;
        background-position: center;
        opacity: 1;

        &_panel{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: $background;
            display: flex;
            flex-direction: row;
            align-items: center;

            &--title{
                color: white;
                width: 50%;
                text-align: center;
                font-size: 2.5vw;
                text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                display: flex;
                flex-direction: column;
                height: 100%;

                .title{
                    height: 60%;
                    padding: 1%;
                    display: flex;
                    align-items: end;
                    z-index: 99;
                }
                .info{
                    font-size: 1vw;
                    padding-left: 5%;
                    padding-right: 5%;
                    font-family: Ojuju;
                    letter-spacing: 0.25cap;
                    margin: 0;
                    height: 40%;
                    position: relative;
                    top: -150px;
                    @media screen and (max-width: 1281px) {
                        font-size: 1.2vw;
                    }
                    @media screen and (max-width: 1024px) {
                        font-size: 1.3vw;
                    }
                }
                
            }

            &--nav{  
                width: 50%;
                height: 100%;
                display: flex;
                text-align: center;
                align-items: center;
                flex-direction: column;
                

                ul{
                    width: 100%;
                    height: 10%;
                    display: flex;
                    margin: 0;
                    padding: 0;
                    flex-direction: row;
                    color: white;
                    list-style-type: none;
                    align-items: center;

                    li{
                        width: 33.3%;
                        font-size: 1.75vw;
                        text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                        cursor: pointer;
                        font-family: Ojuju;
                        letter-spacing: 0.25cap;

                        &:hover{
                            text-shadow: none;
                            transition: text-shadow 0.3s ease-in-out;
                        }
                    }
                }

                div{

                    width: 50%;
                    height: 90%;
                    display: flex;
                    align-items: center;


                    button{
                        font-family: Ojuju; 
                        margin-left: auto;
                        margin-right: auto;
                        width: 150px;
                        height: auto;
                        font-size: 1.3rem;
                        padding: 2px;
                        background-color: transparent;
                        color: white;
                        border: solid 2px white;
                        text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                        cursor: pointer;

                        &:hover{
                            text-shadow: none;
                            border-color: rgba(255, 255, 255, 0.562);
                            transition: 0.3s ease-in-out;
                        }
                    }
                }
                

            }
        }
    }
</style>
<style scoped lang="scss">
@media screen and (max-width: 768px) {

    $background: rgba(79, 178, 219, 0.8235);

    .main{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-image: url('../assets/landingpagebackground.jpg');
        background-size: cover;
        background-position: center;
        opacity: 1;

        &_panel{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: $background;
            display: flex;
            flex-direction: column;
            align-items: center;

            &--title{
                color: white;
                width: 90%;
                text-align: center;
                font-size: 4vw;
                text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                display: flex;
                flex-direction: column;
                height: 100%;
                order: 1;

                .title{
                    height: auto;
                    padding: 10%;
                    display: flex;
                    align-items: end;
                    z-index: 99;
                    position: relative;
                    top: -25%;
                }
                .info{
                    font-family: Ojuju;
                    font-size: 2.2vw;
                    letter-spacing:0.3cap;
                    padding-left: 0%;
                    padding-right: 0%;
                    margin: 0;
                    width: 100%;
                    height: 40%;
                    position: relative;
                    top: -50%;
                }
                
            }

            &--nav{  
                width: 90%;
                height: 100%;
                display: flex;
                text-align: center;
                align-items: center;
                flex-direction: column;
                

                ul{
                    width: 100%;
                    height: 10%;
                    display: flex;
                    margin: 0;
                    padding: 0;
                    flex-direction: row;
                    color: white;
                    list-style-type: none;
                    align-items: center;
                    order: 0;

                    li{
                        width: 33.3%;
                        font-family: Ojuju;
                        letter-spacing: 0.25cap;
                        font-size: 2.5vw;
                        text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                        cursor: pointer;

                        &:hover{
                            text-shadow: none;
                            transition: text-shadow 0.3s ease-in-out;
                        }
                    }
                }

                div{

                    width: 50%;
                    height: 90%;
                    display: flex;
                    align-items: center;
                    


                    a{
                        display: flex;
                        position: absolute;
                        bottom: 75px;
                        align-items: center;
                        text-align: center;
                        left: calc(50vw - 75px);

                        a:-webkit-any-link{
                            text-decoration: none;
                        }

                        button{
                            font-family: Ojuju; 
                            width: 150px;
                            height: auto;
                            font-size: 1.3rem;
                            padding: 2px;
                            background-color: transparent;
                            color: white;
                            border: solid 2px white;
                            text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                            cursor: pointer;
                        

                            &:hover{
                                text-shadow: none;
                                border-color: rgba(255, 255, 255, 0.562);
                                transition: 0.3s ease-in-out;
                            }
                    }
                    }
                }
                

            }
        }
    }
}
</style>
<style scoped lang="scss">
@media screen and (max-width: 576px) {

    $background: rgba(79, 178, 219, 0.8235);

    .main{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-image: url('../assets/landingpagebackground.jpg');
        background-size: cover;
        background-position: center;
        opacity: 1;

        &_panel{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: $background;
            display: flex;
            flex-direction: column;
            align-items: center;

            &--title{
                color: white;
                width: 90%;
                text-align: center;
                font-size: 5vw;
                text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                display: flex;
                flex-direction: column;
                height: 100%;
                order: 1;

                .title{
                    height: auto;
                    padding: 10%;
                    display: flex;
                    align-items: end;
                    z-index: 99;
                    position: relative;
                    top: -25%;
                }
                .info{
                    font-family: Ojuju;
                    font-size: 2.5vw;
                    letter-spacing:0.3cap;
                    padding-left: 0%;
                    padding-right: 0%;
                    margin: 0;
                    width: 100%;
                    height: 40%;
                    position: relative;
                    top: -50%;
                }
                
            }

            &--nav{  
                width: 90%;
                height: 100%;
                display: flex;
                text-align: center;
                align-items: center;
                flex-direction: column;
                

                ul{
                    width: 100%;
                    height: 10%;
                    display: flex;
                    margin: 0;
                    padding: 0;
                    flex-direction: row;
                    color: white;
                    list-style-type: none;
                    align-items: center;
                    order: 0;

                    li{
                        width: 33.3%;
                        font-family: Ojuju;
                        letter-spacing: 0.25cap;
                        font-size: 3vw;
                        text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                        cursor: pointer;

                        &:hover{
                            text-shadow: none;
                            transition: text-shadow 0.3s ease-in-out;
                        }
                    }
                }

                div{

                    width: 100%;
                    height: 90%;
                    display: flex;
                    align-items: center;
                    

                    a{
                        display: flex;
                        position: absolute;
                        bottom: 75px;
                        align-items: center;
                        text-align: center;
                        left: calc(50vw - 75px);

                        a:-webkit-any-link{
                            text-decoration: none;
                        }

                        button{
                            font-family: Ojuju; 
                            width: 150px;
                            height: auto;
                            font-size: 1.3rem;
                            padding: 2px;
                            background-color: transparent;
                            color: white;
                            border: solid 2px white;
                            text-shadow: 3px 4px 3px rgba(66, 68, 90, 1);
                            cursor: pointer;
                        

                            &:hover{
                                text-shadow: none;
                                border-color: rgba(255, 255, 255, 0.562);
                                transition: 0.3s ease-in-out;
                            }
                    }
                    }
                    
                }
                

            }
        }
    }
}
</style>