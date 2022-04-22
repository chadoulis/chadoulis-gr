import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from "firebase/firestore";

/**
 * A service for fetching the data for the blog, from the Firestore database.
 */
@Injectable({
  providedIn: 'root',
})
export class BlogService {

  /**
   *
   * @param {AngularFirestore} afs
   */
  constructor(
    public afs: AngularFirestore
    ) { }

  /**
   * Returns an array of all the blog posts.
   * @returns
   */
  getBlogPosts() {
    return this.afs.collection("blog").snapshotChanges();
  }

  /**
   * Returns an array of blog-posts corresponding to a specific category
   * @param {string} category
   * @returns
   */
  getBlogPostsOfCategory(category: string) {
    return this.afs.collection("blog", ref => ref.where("category", "==", category)).snapshotChanges()
  }

  /**
   * Given the slug, returns a blog post
   * @param {string} slug
   * @returns
   */
  getBlogPostBySlug(slug: string | null) {
    return this.afs.collection("blog", ref => ref.where("slug", "==", slug)).snapshotChanges()
  }

  // getBlogPostBySlug2(slug: string) {
  //   return this.afs.collection("news", ref => ref.where("slug", "==", slug)).snapshotChanges()
  //   .pipe(map((res) => {
  //       return res.payload.doc.data()
  //     }))
  // }


  getBlogPostsByLanguage(languge: string) {
    return this.afs.collection("blog", ref => ref.where("language", "==", languge)).snapshotChanges()
  }

  subscribe(email: string) {
    this.afs.collection("subscribers").add({
      email: email
    })
  }



}
