<script lang="ts">
</script>

<template lang="pug">
.main
    .main_panel
        .main_panel--title Park Krajobrazowy: Dolina Jezierzycy
        .main_panel--nav
            button Otwórz mapę
</template>

<style scoped lang="scss">
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
            background-color: #069cdad2;
            display: flex;
            flex-direction: row;
            align-items: center;

            &--title{
                color: white;
                width: 50%;
                text-align: center;
                font-size: 2.5vw;
                
            }

            &--nav{  
                width: 50%;
                height: 100%;
                display: flex;
                text-align: center;
                align-items: center;

                button{ 
                    margin-left: auto;
                    margin-right: auto;
                    width: 15%;
                    height: 5%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

            }
        }
    }
</style>