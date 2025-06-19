import { AxiosError } from "axios";
import { LoadingParagraph } from "./styled";

interface LoadingProps {
    error: AxiosError | null;
}

const Loading = ({error}: LoadingProps) => {

    return (
        <div>
            {!error ?
                (
                    <>
                        <LoadingParagraph>
                            Loading exchange rates for your application 📖🤓 <br/>
                            Please wait.
                        </LoadingParagraph >
                    </>
                )
                :
                (
                    <>
                        <LoadingParagraph>Failed to download data 🫣 <br/>
                            Please check your internet connection. <br/>
                            If the issue persists, please try again later.
                        </LoadingParagraph>
                    </>)}
        </div >
    )
}

export default Loading;