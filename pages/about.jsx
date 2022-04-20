import Link from "next/link";

const about = () => {
    return (
        <>
            <div>about page</div>
            <Link href="/">
                <a>go to index page</a>
            </Link>
        </>
        
    );
}

export default about;