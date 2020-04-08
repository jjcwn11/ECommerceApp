using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWihTypesAndBrandsSpecification:BaseSpecification<Product>
    {
        public ProductsWihTypesAndBrandsSpecification()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);

        }

         public ProductsWihTypesAndBrandsSpecification(int id)
         : base(x => x.Id ==id)
        {
              AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand); 

        }

        
    }
}