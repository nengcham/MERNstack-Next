import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <>
        <a href="#modal-opened" class="link-1" id="modal-closed">Open Modal</a>
        <div class="modal-container" id="modal-opened">
        <div class="modal">

        <div class="modal__details">
            <h1 class="modal__title">Modal Title</h1>
            <p class="modal__description">Sentence that will tell user what this modal is for or something.</p>
        </div>

        <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore
            repellendus.</p>

        <button class="modal__btn">Button &rarr;</button>

        <a href="#modal-closed" class="link-2"></a>

        </div>
        </div>
        </>
    )
}