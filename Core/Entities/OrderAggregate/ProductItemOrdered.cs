namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered( int productItemId, string productName, string pictureUrl)
        {

           System.Console.Write("Inside ProductItem Ordered");
          
            productItemId = ProductItemId;
            ProductName = productName;
            PictureUrl = pictureUrl;
        }

        public int ProductItemId { get; set; }     
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
    }
}