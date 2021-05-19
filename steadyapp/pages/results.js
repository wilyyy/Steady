import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../comps/Button';
import Subheader from '../comps/Subheader';
import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import BoxyButton from '../comps/BoxyButton';
import styled from 'styled-components';
import PlusCard from '../comps/PlusCard';
import {useState, useEffect} from 'react';


const TitleContainer = styled.div`
    background-color: #616BD1;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFF6E0;
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #212872;
        height: 100vh;
        
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        padding: 0px 20px;
    }
`

var mealresult = null;
var sleepresult = null;
var exerciseresult = null;
var mealtext = null;
var mealtext2 = null;
var mealtext3 = null;
var mealtext4 = null;
var sleeptext = null;
var sleeptext2 = null;
var sleeptext3 = null;
var sleeptext4 = null;
var exercisetext = null;
var exercisetext2 = null;
var exercisetext3 = null;
var exercisetext4 = null;


export default function Test() {

  useEffect(()=>{
    if(process.browser)
    {
      mealresult = sessionStorage.getItem("mealresult");
      sleepresult = sessionStorage.getItem("sleepresult");
      exerciseresult = sessionStorage.getItem("exerciseresult");
    }
  }, []);

  useEffect(()=>{
    if(process.browser)
    {
      if(sleepresult == "Perfect")
      {
        sleeptext = `You are getting the recommended amount of sleep! Keep up your sleep schedule and continue that habit. Now that you are getting enough sleep, you can enhance that sleep with several techniques!`
        sleeptext2 = `Start a pre-sleep routine which preps you for a good night’s rest! Focus on activities such as listening to relaxing music, reading, or even just a deep breathing session!`
        sleeptext3 = `Another great tip is to optimize your bedroom. Make sure that you are only sleeping on your bed and minimize light and noise sources in your room at night.`
        sleeptext4 = `If someone else you know is having trouble sleeping, ask about their daily routines, specifically about the times they drink coffee or alcohol, exercise, or even eat. Doing any of these activities to close to bedtime can result in worse sleep.
        Since you’re such a great sleeper, don’t be afraid to share some of your own habits with your friends or family. They might need it!`
      }

      else if(sleepresult == "TooMuch")
      {
        sleeptext = `Your sleep amounts are okay, but you may be sleeping too much. This could be the result of many things, including medical disorders, depression, or just a simply not wanting to get out of bed. While it may feel relaxing and peaceful to sleep long hours, oversleep has been linked to several medical problems, such as obesity, headaches, or back pain. The recommended amount of sleep you should be getting is around 7-9 hours, more if you are a teenager, or less at a senior age.`
        sleeptext2 = `If you’re having trouble with sleeping too much, try setting up a sleep schedule, where you would sleep and wake up at the same time every day, including weekends. This can get your body into a habit of getting the right amount of sleep with some effort. Keeping up this habit for about 3 weeks will give your body enough to naturally wake up, even without the help of an alarm!`
        sleeptext3 = `Another way to improve your sleep is to give your eyes a break from computer and phone screens for at least a few hours. The blue light emitted from your device can disrupt your body’s sleeping rhythms if viewed too late into the night. Looking into a blue-light filter for your devices can also help!`
      }

      else if(sleepresult == "TooLittle")
      {
        sleeptext = `You’re lacking a lot of sleep when compared with the recommended 7-9 hours for young adults. This can lead to irritability, excessive yawning, and daytime tiredness. Other risks include anxiety, depression, and even paranoia. Take some of these tips to heart to get on track towards a healthier sleep schedule.`
        sleeptext2 = `Follow a schedule and manage your time! Lack of sleep usually comes activities on the computer or phone late at night. By making time for activities earlier in the day, whether it’s through doing work or school earlier in the day, or weaving these activities together, we can sleep earlier and feel better the next day.`
        sleeptext3 = `If it comes down to it, investigate melatonin as a sleep supplement. Just a few grams of this helpful substance can put your body to sleep longer than you normally would. Always start with a small dose to gauge the effectiveness, as it varies from person to person. Use melatonin as an accelerant to a good night’s sleep! Make sure to consult a doctor or do your research before consuming.`
      }
    }
  }, []);

  useEffect(()=>{
    if(process.browser)
    {
      if(mealresult == "Perfect")
      {
        mealtext = `You’re eating the recommended number of meals a day, which is great! You can improve even further by making sure each meal is healthy and providing you with the right amount of nutrients.`
        mealtext2 = `Make sure to have lots of fruits and vegetables as part of your diet. These can easily be mixed with your other food groups, such as through sandwiches or salads.  Whole grain foods offer healthy carbs and offer other critical nutrients, such as fibre, protein, and B vitamins.`
        mealtext3 = `Try and limit fast foods to a minimum and consider learning how to cook if the environment allows it. Cooking at home is a great way to reduce costs and maximize nutrients in your diet. Start with simple meals and branch out into other meals you want to try once you have the experience under your belt. Fast foods are okay occasionally but focus on keeping your meals homemade. Your body will thank you for it!`
        mealtext4 = `You’re doing a great job! Consider sharing your eating habits with others and giving them tips if your friends or family or struggling to meet their recommended meals per day.`
        
      }

      else if(mealresult == "TooMuch")
      {
        mealtext = `Eating too many meals can be detrimental, if not handled properly. Some diets do recommend having more meals, but this means smaller portions. If you are regularly eating until you are full, having too many meals can lead to obesity and increased risk of cancer and other chronic health problems.`
        mealtext2 = `We can start adjusting the number of meals we’re having by preparing meals beforehand at a portion that would sate our hunger but not bloat us. This can also help balance our meals by measuring out carbs, proteins, and fats in the food we created/bought.`
        mealtext3 = `If you feel that you’re still hungry in between meals when lowering your number of portions, consider drinking water! Water is a great way to satiate your hunger in between meals and will also help reaching your goal of 3-4 liters of fluids a day.`
        mealtext4 = `Don’t be afraid to start today! The road to a healthy diet and number of meals will lead you to an overall healthier lifestyle.`
        
      }

      else if(mealresult == "TooLittle")
      {
        mealtext = `You are eating less than the recommended number of meals per day. This means you’re either eating too much per meal in order to remedy eating less meals, or you’re not eating enough overall. This can lead to low energy levels, constant hunger pangs, and a feeling of internal cold. There are plenty of other effects, so let’s focus on how we can improve our eating habits.`
        mealtext2 = `Start slow by eating small meals more often. Split up your large meals into frequent, small ones to condition your stomach to accept food more often throughout the day. This can help improve your appetite so that you can begin eating more often without feeling sick.`
        mealtext3 = `Another way to increase the frequency of meals is to link it with a fun activity. Whether its watching your favourite series on Netflix or reading up on some news, linking eating with a fun activity will make it a less daunting activity.`
        mealtext4 = `Don’t be afraid to start today! Eating healthier and more often is a great way to improve other aspects of your life. Being hungry can prevent a good night’s sleep and offer plenty of energy for exercise.`
        
      }
    }
  }, []);

  useEffect(()=>{
    if(process.browser)
    {
      if(exerciseresult == "Perfect")
      {
        exercisetext = `You’re getting a perfect amount of exercise! Keep it up! You’re living a great lifestyle, physically, which will help your overall mood and shape. Here are some tips to further improve your workouts.`
        exercisetext2 = `Make sure to include variety in your workouts. Introducing different exercises or whole workouts to your arsenal can reduce the monotony, as well as push your muscles to move in different ways, which is a great plus for building body strength.`
        exercisetext3 = `Try and push yourself if the workouts are getting easy. Whether its increasing intensity or time, both of these can improve your body image even further. However, don’t risk injuries if the exercises are too tough. Pace yourself, and even see a doctor about how much you should be doing according to your body.`
        exercisetext4 = `You’re doing great! Don’t be afraid to tell other people about your lifestyle and how others can start exercising as well as you.`
      }

      else if(exerciseresult == "TooMuch")
      {
        exercisetext = `While exercising is good, exercising too much can be detrimental without proper research or knowledge of your body. Not giving your muscles enough time to recover from previous workouts can strain and prevent them from recovering completely. Overexercising will also lead to a state of chronic stress, which can lead to gaining weight, mood swings, and even getting less fit.`
        exercisetext2 = `In order to properly reduce your workouts to match the recommended amount, we need to simply reduce the time you spend working out. Instead of focusing on your body too much, spend some of that time working on your brain, whether its through studying some of your favourite topics, or reading some books you find interesting. Balancing out your activities can lead you to becoming a balanced human being!`
        exercisetext3 = `If you’re dead set on your exercise schedule, consider making every other day a light day, where you spend your time doing light exercises, such as jogging or light lifting. This can satisfy your thirst for exercise, while also giving your body a break from intense movements.`
        exercisetext4 = `You’re doing great! Just make sure you’re balancing out your exercise properly and you’ll be on your way to a healthy lifestyle.`
        
      }

      else if(exerciseresult == "TooLittle")
      {
        exercisetext = `Not getting enough exercise is a big detriment to your lifestyle. This can lead to increased risk of heart disease, cancer, and diabetes. On the flip side, getting exercise can help you get better sleep and burn more calories to eat better, more balanced meals. Here are some ways you can start your journey to physical activity.`
        exercisetext2 = `If you haven’t exercised recently, always start slow. Trying to match other people at the gym or trying to run how you might have used to in the past can lead to overexertion of the heart and muscles. Always gauge your fitness level by starting slow, whether its through a light jog or light lifts at the gym.`
        exercisetext3 = `Once you’ve found your fitness level, you can start doing research online or consult an expert about a proper fitness plan for you. Many websites offer applications to create workout plans and add exercises. Once you’ve gotten started, add these to your schedule and start forcing yourself to go out and do these exercises. The first 3 weeks will be hard but after that, your body will have gotten into the rhythm and exercise will become second nature.`
        exercisetext4 = `So go on! Get started with your workouts today. While the best time to start would’ve been yesterday, the second-best time to start is today.`
        
      }
    }
  }, []);

  const [picstate1, setPicState1] = useState(false);
  const [picstate2, setPicState2] = useState(false);
  const [picstate3, setPicstate3] = useState(false);

  const HandleClick1 = () =>{
      setPicState1(!picstate1);
      setPicState2(false);
      setPicstate3(false);

  }

  const HandleClick2 = () =>{
      setPicState1(false);
      setPicState2(!picstate2);
      setPicstate3(false);
  }

  const HandleClick3 = () =>{
      setPicState1(false);
      setPicState2(false);
      setPicstate3(!picstate3);
  }

  return (
    <TitleContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="column">
        <TopBar />
        <PlusCard 
        src= {picstate1 ? "/meal_icon.png" : "/meal_icon_bw.png"}
        bgcolor= {picstate1 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate1 ? "#FFF6E0" : "#131521"}
        textcolor2= {picstate1 ? "#FFF6E0" : "#131521"}
        sign= {picstate1 ? "-" : "+"}
        height= {picstate1 ? "40rem" : "5rem"}
        width="35rem"
        onClick={HandleClick1}
        bodytext = {mealtext}
        bodytext2 = {mealtext2}
        bodytext3 = {mealtext3}
        bodytext4 = {mealtext4} />
        <PlusCard 
        src = {picstate2 ? "/sleep.png" : "/sleep_bw.png"} 
        bgcolor= {picstate2 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate2 ? "#FFF6E0" : "#131521"}
        textcolor2= {picstate2 ? "#FFF6E0" : "#131521"}
        height= {picstate2 ? "40rem" : "5rem"}
        sign= {picstate2 ? "-" : "+"}
        width="35rem" text="Sleep" onClick={HandleClick2} 
        bodytext = {sleeptext}
        bodytext2 = {sleeptext2}
        bodytext3 = {sleeptext3}
        bodytext4 = {sleeptext4} />
        <PlusCard src="/meal_icon.png" width="35rem" text="Exercise" onClick={HandleClick3}
        src = {picstate3 ? "/scale.png" : "/scale_bw.png"} 
        bgcolor= {picstate3 ? "#F86D34" : "#E8E0CD"}
        textcolor= {picstate3 ? "#FFF6E0" : "#131521"}
        height= {picstate3 ? "40rem" : "5rem"}
        sign= {picstate3 ? "-" : "+"}
        textcolor2= {picstate3 ? "#FFF6E0" : "#131521"}
        bodytext = {exercisetext}
        bodytext2 = {exercisetext2}
        bodytext3 = {exercisetext3}
        bodytext4 = {exercisetext4}/>
        <NavBar />
      </div>
    </TitleContainer>
  )
}