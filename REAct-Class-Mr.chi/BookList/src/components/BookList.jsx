import styles from "./BookList.module.css"
import { useState } from "react"

const BookList =() => {

	const listofBooks = [
		"Name of the Wind",	
		"The Wise",
		"Kafka on the Shore",
		"The Master and the Margarita"
	]	



	const [books, setBooks] = useState(listofBooks)

	const handleDelete = (clickedBook) => {

		setBooks(books.filter(book => (book !== clickedBook)))

	}


    return(
  	<div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className="title"> Book Collections</h1>
                <p>Books</p>
                <form className="search-books">
                    <input type="text" placeholder="Search books..." />
                </form>
	    	</div>
	    </header>
	    <div className={styles.booklist}>
	    	<h2 className={styles.title}>Books to Read</h2>

			<ul>

				{
					books.map((book, index) => (

				<li key={index}>

	    			<span className={styles.name}>{book}</span>
	    			<span className={styles.delete} onClick= {()=> handleDelete(book)}>delete</span>
	    		</li>

					))
				}

			</ul>

			



	    	{/* <ul>
	    		<li>
	    			<span className={styles.name}>Name of the Wind</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    	</ul> */}

	    </div>
	    <form type="submit" className={styles.addbook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>

    )
    
}

export default BookList;