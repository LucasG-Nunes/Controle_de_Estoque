const express = require("express");
const todosProdutos = [{name: "lucas", status:false}]
const Routes = express.Router();
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();


//C
    Routes.post("/produtos", async (request,response)=>{
        const {name, price,category}= request.body
        
        const produto = await prisma.ProdutoNew.create({data:{
            name,
            price,
            category

        }})
        return response.status(201).json(produto)
    })
//R
    Routes.get("/produtos", async(request, response)=>{
        const produto = await prisma.ProdutoNew.findMany()
        return response.status(200).json(produto)
    })
//U
    Routes.put("/produtos", async(request, response)=>{
        const {name,id,status,price,category} = request.body
        if(!id){
            return response.status(400).json("Id is mandatory")
        }
        const produtoAlreadyExiste = await prisma.ProdutoNew.findUnique({where: {id}})

        if (!produtoAlreadyExiste){
            return response.status(404).json("Produto não existe")
        }

        const produto = await prisma.ProdutoNew.update({
            where:{
                id,
            },
            data:{
                id,
                name,
                status,
                price,
                category
            }
        })
        return response.status(200).json(produto)
    })
//D
    Routes.delete("/produtos/:id", async (request,response)=>{

        const {id} = request.params;
        
        const intId= parseInt(id)

        if(!intId){
            return response.status(400).json("Id is mandatory")
        }

        const produtoAlreadyExiste = await prisma.ProdutoNew.findUnique({where: {id: intId}})

        if (!produtoAlreadyExiste){
            return response.status(404).json("Produto não existe")
        }
        await prisma.ProdutoNew.delete({where:{ id: intId}})
        return response.status(200).send()
    })

module.exports= Routes