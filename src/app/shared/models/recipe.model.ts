/**
 * Information about a recipie
 */

export interface Recipe {

  /**
   * The Recipe Title
  */
  title: string;

  /**
   * Contains a map of components and their sub components
   */
  components: RecipeComponent[];
  // {
  //   [componentOrderId: number]: RecipeComponent;
  // };
}


export interface RecipeComponent {

  /**
   * Order of component
   */
  orderId: number;

  /**
  * Title of the component
  */
  title: string;

  /**
  * Title of the component
  */
  duration: number;

  /**
   * Wether the item can expand past the time it was initially set
   */
  expandable: boolean;
}
