import React from "react";
import Stepper from '../components/Steppers';
import styled from 'styled-components';
import {useStepper} from "../context";
import Home from '../components/Home';
import Service from '../components/Service';
import Calander from '../components/Calander';
import CarWashForm from '../components/Carwashform';


function Stepprogress () {
    const {incrementCurrentStep, decrementCurrentStep} = useStepper();

    return(
        <>
        <div className="container">
        <Stepper >
            <Stepper.Steps>
                <Stepper.Step id="first" name="Step 1">
                    <StepBody>
                        <Home />
                        <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10'>
                            </div>
                            <div className='col-2'>
                            <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>
                            </div>
                        </div>   
                    </StepBody>
                </Stepper.Step>
                <Stepper.Step id="second" name="Step 2">
                    <StepBody>
                        <Service />
                        <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10'>
                            <Button onClick={decrementCurrentStep}>Previous step</Button>
                            </div>
                            <div className='col-2'>
                            <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>
                            </div>
                        </div>                              
                        </StepBody>
                </Stepper.Step>
                <Stepper.Step id="third" name="Step 3">
                    <StepBody>
                        <Calander />
                        <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10'>
                            <Button onClick={decrementCurrentStep}>Previous step</Button>
                            </div>
                            <div className='col-2'>
                            <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>
                            </div>
                        </div>                        
                        </StepBody>
                </Stepper.Step>
                <Stepper.Step id="forth" name="Step 4">
                    <StepBody>
                      <CarWashForm />
                      
                      <div className='container mt-5'>
                          <div className='row'>
                            <div className='col-10'>
                            <Button onClick={decrementCurrentStep}>Previous step</Button>
                            </div>
                            <div className='col-2'>
                            <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>
                            </div>
                        </div>                                
                        </StepBody>
                </Stepper.Step>
            </Stepper.Steps>
        </Stepper>
        </div>
       
        </>
);
}

const StepBody = styled.div`
text-align:left;
`

const Button = styled.button`
margin-top: 20px;
margin:0 20px;
cursor:pointer;
outline:none;
background:#fff;
border:1px solid #000;
padding:6px 12px;
&:first-child {
text-align: left; // Push the first button (Previous step) to the left
}

&:last-child {
text-align: right; // Add some spacing between the buttons
}
`

    


export default Stepprogress;