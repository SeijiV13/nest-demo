
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogDocument = Blog & Document

@Schema()
export class Blog {

    @Prop()
    id: string;
    @Prop({ required: true, maxlength: 50})
    author: string;
    @Prop({required: true, maxlength: 250})
    title: string;
    @Prop({required: true})
    content: string;
    @Prop({required: false, default: "N/A"})
    description: string;

}

export const BlogSchema = SchemaFactory.createForClass(Blog);