'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Upload, Eye } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Resume Management</h1>
        <p className="text-muted-foreground">
          Manage your resume and tailor it for different applications
        </p>
      </div>

      {/* Resume Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Current Resume</CardTitle>
          <CardDescription>Preview and manage your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preview Section */}
            <div className="lg:col-span-2">
              <div className="bg-white text-black rounded-lg shadow-lg p-8 min-h-96">
                {/* Resume Preview */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold">Jane Doe</h2>
                    <p className="text-gray-600">San Francisco, CA | jane@example.com | (555) 123-4567</p>
                    <p className="text-blue-600 hover:underline cursor-pointer">linkedin.com/in/janedoe</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2">
                      Professional Summary
                    </h3>
                    <p className="text-sm text-gray-700">
                      Experienced Full Stack Developer with 5+ years of expertise in React, Node.js, and cloud technologies.
                      Proven track record of building scalable applications and leading cross-functional teams.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2">
                      Experience
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-bold">Senior Frontend Engineer - TechCorp (2022 - Present)</p>
                        <p className="text-gray-600">San Francisco, CA</p>
                        <ul className="text-gray-700 ml-4 mt-1 list-disc">
                          <li>Led development of customer-facing features using React and TypeScript</li>
                          <li>Improved application performance by 40% through optimization strategies</li>
                          <li>Mentored junior engineers and conducted code reviews</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold">Full Stack Developer - StartupXYZ (2019 - 2022)</p>
                        <p className="text-gray-600">New York, NY</p>
                        <ul className="text-gray-700 ml-4 mt-1 list-disc">
                          <li>Built and maintained full-stack web applications using MERN stack</li>
                          <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
                          <li>Collaborated with design and product teams on feature implementations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2">
                      Skills
                    </h3>
                    <div className="text-sm text-gray-700">
                      <p><span className="font-bold">Languages:</span> JavaScript, TypeScript, Python</p>
                      <p><span className="font-bold">Frontend:</span> React, Next.js, Tailwind CSS</p>
                      <p><span className="font-bold">Backend:</span> Node.js, Express, PostgreSQL</p>
                      <p><span className="font-bold">Tools:</span> Git, Docker, AWS, Vercel</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold border-b border-gray-400 pb-1 mb-2">
                      Education
                    </h3>
                    <div className="text-sm text-gray-700">
                      <p><span className="font-bold">Bachelor of Science in Computer Science</span></p>
                      <p>University of California, Berkeley | Graduated 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Section */}
            <div className="space-y-3">
              <Button variant="primary" className="w-full">
                <Download size={16} />
                Download PDF
              </Button>
              <Button variant="secondary" className="w-full">
                <Eye size={16} />
                View Full Page
              </Button>
              <Button variant="outline" className="w-full">
                <Upload size={16} />
                Upload New Version
              </Button>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Tailored Versions</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-muted hover:shadow-md transition-shadow cursor-pointer">
                    <p className="text-sm font-medium text-foreground">Tech Company Resume</p>
                    <p className="text-xs text-muted-foreground">Last updated 2 days ago</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted hover:shadow-md transition-shadow cursor-pointer">
                    <p className="text-sm font-medium text-foreground">Startup Resume</p>
                    <p className="text-xs text-muted-foreground">Last updated 1 week ago</p>
                  </div>
                  <Button variant="ghost" className="w-full justify-center text-sm">
                    + Create Tailored Version
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resume Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Resume Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Keep your resume to 1-2 pages for easier scanning</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Tailor your resume for each job application to match job description keywords</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Use action verbs and quantifiable metrics in your accomplishments</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Include relevant skills that match the job requirements</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Update your resume regularly with new accomplishments and skills</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
