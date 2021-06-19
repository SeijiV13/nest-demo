import { CreateBlogDto } from './dto/create-blog.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument> ) {
    }
    
    async createBlog(createBlogDto: CreateBlogDto) {
        const createBlog = new this.blogModel(createBlogDto);
        return createBlog.save();
    }

    async getBlogs() {
        return this.blogModel.find().exec();
    }

    async getBlog(blogId: string) {
        return this.blogModel.findOne({_id: blogId}).exec();
    }

    async updateBlog(updateBlogDto: UpdateBlogDto) {
        return this.blogModel.updateMany({_id: updateBlogDto.id}, updateBlogDto).exec();
    }

    async deleteBlog(blogId: string ) {
        return this.blogModel.deleteOne({_id: blogId}).exec( )
    }
}
