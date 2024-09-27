export default function CreatePage() {
    return (
        <section className="page">
            <h1>Create new post</h1>
            <form>
                <label htmlFor="caption">Title</label>
                <input type="text" placeholder="Type a title"/>
            </form>
        </section>
    );
}
