import Link from "next/link";

const index = () => {
    return (
        <>
            <div>welcome to index page</div>
            <Link href="/about">
                <a>go to about page</a>
            </Link>
        </>
        
    );
}

export default index;