import {useForm} from "react-hook-form";
import {MainButton} from "../buttons/MainButton.tsx";
import styled from "styled-components";
import {FlexContainer} from "../styled/FlexContainer.tsx";

const SubscribeForm = () => {
    type FormData = {
        email: string,
    }
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
            defaultValues: {
                email: ''
            }
        }
    )

    const submit = (data: FormData) => {
        console.log(data)
    }
    return (
        <FlexContainer flexDirection={"column"} justifyContent={"space-around"} alignItems={"start"}>
            <div>
                <StyledH2>Subscribe to our news</StyledH2>
                <form onSubmit={handleSubmit(submit)}>
                    <StyledInput type="text" {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Incorrect email address',
                        },
                    })}/>
                    {errors.email && <span style={{color: 'red', margin: '0 10px'}}>{errors.email.message}</span>}
                    <MainButton type={'submit'} text={'send'} onClick={() => {
                    }} width={'80px'}></MainButton>
                </form>
            </div>

            <div>
                <p>Designed by Alisa Samborskaya</p>
                <p>©RSSchool & ©Yem Digital 2021</p>
            </div>

        </FlexContainer>
    );
};
const StyledInput = styled.input`
    margin-right: 10px;
    height: 40px;
    width: 300px;
    font-size: 20px;
    padding: 10px;
`
const StyledH2 = styled.h2`
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 10px;
`
export default SubscribeForm;