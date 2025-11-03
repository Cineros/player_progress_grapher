import React from "react";
import SignUpForm from "../components/SignUpForm";
import PageContainer from "../components/PageContainer";

function SignUp(){
    return(
        <div style={{justifyContent:'center'}}>
            <PageContainer>
                <SignUpForm />
            </PageContainer>
        </div>
    );
}

export default SignUp;