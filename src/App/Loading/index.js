import { LoadingParagraph } from "./styled";

const Loading = ({error}) => {

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