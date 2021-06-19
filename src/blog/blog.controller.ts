import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

     //@Post for creating new items
     //@Get for getting data
     //@PUT for updating the data
     //@Delete for deleting the data
    // for creation of new blog
    @Post()
    createBlog(@Body() createBlogDto: CreateBlogDto) {
        return this.blogService.createBlog(createBlogDto);
    }

    @Get("/all")
    getBlogs() {
        return this.blogService.getBlogs();
    }

    @Get(":id")
    getSingleBlog(@Param() param) {
        return this.blogService.getBlog(param.id);
    }

    @Put()
    updateBlog(@Body() updateBlogDto: UpdateBlogDto) {
        return this.blogService.updateBlog(updateBlogDto);
    }

    @Delete(":id")
    deleteBLog(@Param() param) {
        return this.blogService.deleteBlog(param.id);
    }
}
