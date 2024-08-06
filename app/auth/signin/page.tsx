import Header from "@/components/Header";
import Footer from"@/components/Footer";
import styles from './signIn.module.scss'
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
export default function SignIn(){
    return(
    <>
    <div className="row container">
    <div className="d-none d-md-block col-md-5">
        <Image src="/signin-img.svg" alt="signin image" width={400} height={700}/>
    </div>
    <div className="col-xs-12 col-md-7">
        <div>
            <div>
                <h1>Welcome Back</h1>
            </div>
            <div>
                <Link href="/">
                    <Image src="/vercel.svg" alt="logo" width={72} height={16} />
                </Link>
            </div>
        </div>
        <div>
            <p>Don't have an account? <Link href={routes.auth.signup}>Sign up</Link></p>
        </div>
        <div>
        <div>
            <div>
                <Link href=""><button>Sign in with Google</button></Link>
                <hr />
            </div>
            <div>or</div>
            <div>
                <Link href=""><button>Sign in with Facebook</button></Link>
                <hr />
            </div>
        </div>
        <div>
            <form action="submit" method="get">
                <div className="input-group mb-3">
                    <label htmlFor="Email">Email address</label>
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="email" className="form-control" id="Email" name="Email" placeholder="Email address" aria-label="Email address" required/>
                    <label htmlFor="Password">Password</label>
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="password" className="form-control" id="Password" placeholder="Password" aria-label="Password" required/>
                    <Link href={routes.auth.password.index}>Forget password?</Link>
                    <div>
                        <Button word="Sign In"/>
                    </div>
                </div>
            
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
    );
}