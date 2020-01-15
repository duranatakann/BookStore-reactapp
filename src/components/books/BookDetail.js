import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const BookDetail = ({ categories, book, onSave, onChange,errors }) => {
  return (

    <form onSubmit={onSave}>
      <h3 style={{textAlign:"center"}}>{book.id ? "Güncelle" : "Yeni Kitap"}</h3>
      <TextInput
        name="bookName"
        label="Kitap İsmi"
        value={book.bookName}
        onChange={onChange}
        error={errors.bookName}
      />

      <SelectInput
        name="categoryId"
        label="Kitap Kategorisi"
        value={book.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Ücreti"
        value={book.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="AuthorName"
        label="Yazar Adı"
        value={book.AuthorName}
        onChange={onChange}
        error={errors.AuthorName}
      />

      <TextInput
        name="unitsInStock"
        label="Stok Sayısı"
        value={book.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success float-right">
        Kaydet
      </button>
    </form>
  );
};

export default BookDetail;
