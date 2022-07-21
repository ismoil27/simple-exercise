const express = require("express");

const db = require("../utils/database");

module.exports = class Product {
  constructor(title, snippet, body) {
    this.title = title;
    this.snippet = snippet;
    this.body = body;
    //   this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO blogs (title, snippet, body) VALUES (?, ?, ?, ?)",
      [this.title, this.snippet, this.body]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM blogs");
  }

  static findById(id, cb) {}
};
