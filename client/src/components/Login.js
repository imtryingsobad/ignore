// @flow
import React, {Fragment} from 'react';

export const Login = () => {
    return (
        <Fragment>
            <section>
                <div>
                    <h2>Login</h2>

                    <form>
                        <div>
                            <input type="text" name='email' id="email" autoComplete="off" placeholder="Your Email"/>
                        </div>
                        <div>
                            <input type="text" name='password' id="password" autoComplete="off" placeholder="Your Password"/>
                        </div>

                        <div>
                            <input type="submit" name='signin' id="signin" value="Sign In"/>
                        </div>


                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Login;